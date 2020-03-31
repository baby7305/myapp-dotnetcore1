using System.Collections.Generic;
using System.Threading.Tasks;
using JHipsterNet.Pagination;
using JHipsterNet.Pagination.Extensions;
using MyCompany.Data;
using MyCompany.Data.Extensions;
using MyCompany.Models;
using MyCompany.Web.Extensions;
using MyCompany.Web.Filters;
using MyCompany.Web.Rest.Problems;
using MyCompany.Web.Rest.Utilities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace MyCompany.Controllers {
    [Authorize]
    [Route("api")]
    [ApiController]
    public class CourseController : ControllerBase {
        private const string EntityName = "course";

        private readonly ApplicationDatabaseContext _applicationDatabaseContext;

        private readonly ILogger<CourseController> _log;

        public CourseController(ILogger<CourseController> log,
            ApplicationDatabaseContext applicationDatabaseContext)
        {
            _log = log;
            _applicationDatabaseContext = applicationDatabaseContext;
        }

        [HttpPost("courses")]
        [ValidateModel]
        public async Task<ActionResult<Course>> CreateCourse([FromBody] Course course)
        {
            _log.LogDebug($"REST request to save Course : {course}");
            if (course.Id != 0)
                throw new BadRequestAlertException("A new course cannot already have an ID", EntityName, "idexists");
            _applicationDatabaseContext.AddGraph(course);
            await _applicationDatabaseContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetCourse), new { id = course.Id }, course)
                .WithHeaders(HeaderUtil.CreateEntityCreationAlert(EntityName, course.Id.ToString()));
        }

        [HttpPut("courses")]
        [ValidateModel]
        public async Task<IActionResult> UpdateCourse([FromBody] Course course)
        {
            _log.LogDebug($"REST request to update Course : {course}");
            if (course.Id == 0) throw new BadRequestAlertException("Invalid Id", EntityName, "idnull");
            //TODO catch //DbUpdateConcurrencyException into problem
            _applicationDatabaseContext.Update(course);
            await _applicationDatabaseContext.SaveChangesAsync();
            return Ok(course)
                .WithHeaders(HeaderUtil.CreateEntityUpdateAlert(EntityName, course.Id.ToString()));
        }

        [HttpGet("courses")]
        public ActionResult<IEnumerable<Course>> GetAllCourses(IPageable pageable)
        {
            _log.LogDebug("REST request to get a page of Courses");
            var page = _applicationDatabaseContext.Courses
                .UsePageable(pageable);
            var headers = PaginationUtil.GeneratePaginationHttpHeaders(page, HttpContext.Request);
            return Ok(page.Content).WithHeaders(headers);
        }

        [HttpGet("courses/{id}")]
        public async Task<IActionResult> GetCourse([FromRoute] long id)
        {
            _log.LogDebug($"REST request to get Course : {id}");
            var result = await _applicationDatabaseContext.Courses
                .SingleOrDefaultAsync(course => course.Id == id);
            return ActionResultUtil.WrapOrNotFound(result);
        }

        [HttpDelete("courses/{id}")]
        public async Task<IActionResult> DeleteCourse([FromRoute] long id)
        {
            _log.LogDebug($"REST request to delete Course : {id}");
            _applicationDatabaseContext.Courses.RemoveById(id);
            await _applicationDatabaseContext.SaveChangesAsync();
            return Ok().WithHeaders(HeaderUtil.CreateEntityDeletionAlert(EntityName, id.ToString()));
        }
    }
}

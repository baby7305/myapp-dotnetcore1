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
    public class SchoolController : ControllerBase {
        private const string EntityName = "school";

        private readonly ApplicationDatabaseContext _applicationDatabaseContext;

        private readonly ILogger<SchoolController> _log;

        public SchoolController(ILogger<SchoolController> log,
            ApplicationDatabaseContext applicationDatabaseContext)
        {
            _log = log;
            _applicationDatabaseContext = applicationDatabaseContext;
        }

        [HttpPost("schools")]
        [ValidateModel]
        public async Task<ActionResult<School>> CreateSchool([FromBody] School school)
        {
            _log.LogDebug($"REST request to save School : {school}");
            if (school.Id != 0)
                throw new BadRequestAlertException("A new school cannot already have an ID", EntityName, "idexists");
            _applicationDatabaseContext.AddGraph(school);
            await _applicationDatabaseContext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetSchool), new { id = school.Id }, school)
                .WithHeaders(HeaderUtil.CreateEntityCreationAlert(EntityName, school.Id.ToString()));
        }

        [HttpPut("schools")]
        [ValidateModel]
        public async Task<IActionResult> UpdateSchool([FromBody] School school)
        {
            _log.LogDebug($"REST request to update School : {school}");
            if (school.Id == 0) throw new BadRequestAlertException("Invalid Id", EntityName, "idnull");
            //TODO catch //DbUpdateConcurrencyException into problem
            _applicationDatabaseContext.Update(school);
            /* Force the reference navigation property to be in "modified" state.
            This allows to modify it with a null value (the field is nullable).
            This takes into consideration the case of removing the association between the two instances. */
            _applicationDatabaseContext.Entry(school).Reference(school0 => school0.Course).IsModified = true;
            await _applicationDatabaseContext.SaveChangesAsync();
            return Ok(school)
                .WithHeaders(HeaderUtil.CreateEntityUpdateAlert(EntityName, school.Id.ToString()));
        }

        [HttpGet("schools")]
        public ActionResult<IEnumerable<School>> GetAllSchools(IPageable pageable)
        {
            _log.LogDebug("REST request to get a page of Schools");
            var page = _applicationDatabaseContext.Schools
                .Include(school => school.Course)
                .UsePageable(pageable);
            var headers = PaginationUtil.GeneratePaginationHttpHeaders(page, HttpContext.Request);
            return Ok(page.Content).WithHeaders(headers);
        }

        [HttpGet("schools/{id}")]
        public async Task<IActionResult> GetSchool([FromRoute] long id)
        {
            _log.LogDebug($"REST request to get School : {id}");
            var result = await _applicationDatabaseContext.Schools
                .Include(school => school.Course)
                .SingleOrDefaultAsync(school => school.Id == id);
            return ActionResultUtil.WrapOrNotFound(result);
        }

        [HttpDelete("schools/{id}")]
        public async Task<IActionResult> DeleteSchool([FromRoute] long id)
        {
            _log.LogDebug($"REST request to delete School : {id}");
            _applicationDatabaseContext.Schools.RemoveById(id);
            await _applicationDatabaseContext.SaveChangesAsync();
            return Ok().WithHeaders(HeaderUtil.CreateEntityDeletionAlert(EntityName, id.ToString()));
        }
    }
}

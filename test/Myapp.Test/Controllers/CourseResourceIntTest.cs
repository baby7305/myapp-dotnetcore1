using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using FluentAssertions;
using MyCompany.Data;
using MyCompany.Models;
using MyCompany.Test.Setup;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using Xunit;

namespace MyCompany.Test.Controllers {
    public class CourseResourceIntTest {
        public CourseResourceIntTest()
        {
            _factory = new NhipsterWebApplicationFactory<Startup>();
            _client = _factory.CreateClient();

            _applicationDatabaseContext = _factory.GetRequiredService<ApplicationDatabaseContext>();

            InitTest();
        }

        private const string DefaultName = "AAAAAAAAAA";
        private const string UpdatedName = "BBBBBBBBBB";

        private static readonly int? DefaultAge = 1;
        private static readonly int? UpdatedAge = 2;

        private readonly NhipsterWebApplicationFactory<Startup> _factory;
        private readonly HttpClient _client;

        private readonly ApplicationDatabaseContext _applicationDatabaseContext;

        private Course _course;

        private Course CreateEntity()
        {
            return new Course {
                Name = DefaultName,
                Age = DefaultAge
            };
        }

        private void InitTest()
        {
            _course = CreateEntity();
        }

        [Fact]
        public async Task CreateCourse()
        {
            var databaseSizeBeforeCreate = _applicationDatabaseContext.Courses.Count();

            // Create the Course
            var response = await _client.PostAsync("/api/courses", TestUtil.ToJsonContent(_course));
            response.StatusCode.Should().Be(HttpStatusCode.Created);

            // Validate the Course in the database
            var courseList = _applicationDatabaseContext.Courses.ToList();
            courseList.Count().Should().Be(databaseSizeBeforeCreate + 1);
            var testCourse = courseList[courseList.Count - 1];
            testCourse.Name.Should().Be(DefaultName);
            testCourse.Age.Should().Be(DefaultAge);
        }

        [Fact]
        public async Task CreateCourseWithExistingId()
        {
            var databaseSizeBeforeCreate = _applicationDatabaseContext.Courses.Count();
            databaseSizeBeforeCreate.Should().Be(0);
            // Create the Course with an existing ID
            _course.Id = 1L;

            // An entity with an existing ID cannot be created, so this API call must fail
            var response = await _client.PostAsync("/api/courses", TestUtil.ToJsonContent(_course));
            response.StatusCode.Should().Be(HttpStatusCode.BadRequest);

            // Validate the Course in the database
            var courseList = _applicationDatabaseContext.Courses.ToList();
            courseList.Count().Should().Be(databaseSizeBeforeCreate);
        }

        [Fact]
        public async Task GetAllCourses()
        {
            // Initialize the database
            _applicationDatabaseContext.Courses.Add(_course);
            await _applicationDatabaseContext.SaveChangesAsync();

            // Get all the courseList
            var response = await _client.GetAsync("/api/courses?sort=id,desc");
            response.StatusCode.Should().Be(HttpStatusCode.OK);

            var json = JToken.Parse(await response.Content.ReadAsStringAsync());
            json.SelectTokens("$.[*].id").Should().Contain(_course.Id);
            json.SelectTokens("$.[*].name").Should().Contain(DefaultName);
            json.SelectTokens("$.[*].age").Should().Contain(DefaultAge);
        }

        [Fact]
        public async Task GetCourse()
        {
            // Initialize the database
            _applicationDatabaseContext.Courses.Add(_course);
            await _applicationDatabaseContext.SaveChangesAsync();

            // Get the course
            var response = await _client.GetAsync($"/api/courses/{_course.Id}");
            response.StatusCode.Should().Be(HttpStatusCode.OK);

            var json = JToken.Parse(await response.Content.ReadAsStringAsync());
            json.SelectTokens("$.id").Should().Contain(_course.Id);
            json.SelectTokens("$.name").Should().Contain(DefaultName);
            json.SelectTokens("$.age").Should().Contain(DefaultAge);
        }

        [Fact]
        public async Task GetNonExistingCourse()
        {
            var response = await _client.GetAsync("/api/courses/" + long.MaxValue);
            response.StatusCode.Should().Be(HttpStatusCode.NotFound);
        }

        [Fact]
        public async Task UpdateCourse()
        {
            // Initialize the database
            _applicationDatabaseContext.Courses.Add(_course);
            await _applicationDatabaseContext.SaveChangesAsync();

            var databaseSizeBeforeUpdate = _applicationDatabaseContext.Courses.Count();

            // Update the course
            var updatedCourse =
                await _applicationDatabaseContext.Courses.SingleOrDefaultAsync(it => it.Id == _course.Id);
            // Disconnect from session so that the updates on updatedCourse are not directly saved in db
//TODO detach
            updatedCourse.Name = UpdatedName;
            updatedCourse.Age = UpdatedAge;

            var response = await _client.PutAsync("/api/courses", TestUtil.ToJsonContent(updatedCourse));
            response.StatusCode.Should().Be(HttpStatusCode.OK);

            // Validate the Course in the database
            var courseList = _applicationDatabaseContext.Courses.ToList();
            courseList.Count().Should().Be(databaseSizeBeforeUpdate);
            var testCourse = courseList[courseList.Count - 1];
            testCourse.Name.Should().Be(UpdatedName);
            testCourse.Age.Should().Be(UpdatedAge);
        }

        [Fact]
        public async Task UpdateNonExistingCourse()
        {
            var databaseSizeBeforeUpdate = _applicationDatabaseContext.Courses.Count();

            // If the entity doesn't have an ID, it will throw BadRequestAlertException
            var response = await _client.PutAsync("/api/courses", TestUtil.ToJsonContent(_course));
            response.StatusCode.Should().Be(HttpStatusCode.BadRequest);

            // Validate the Course in the database
            var courseList = _applicationDatabaseContext.Courses.ToList();
            courseList.Count().Should().Be(databaseSizeBeforeUpdate);
        }

        [Fact]
        public async Task DeleteCourse()
        {
            // Initialize the database
            _applicationDatabaseContext.Courses.Add(_course);
            await _applicationDatabaseContext.SaveChangesAsync();

            var databaseSizeBeforeDelete = _applicationDatabaseContext.Courses.Count();

            var response = await _client.DeleteAsync($"/api/courses/{_course.Id}");
            response.StatusCode.Should().Be(HttpStatusCode.OK);

            // Validate the database is empty
            var courseList = _applicationDatabaseContext.Courses.ToList();
            courseList.Count().Should().Be(databaseSizeBeforeDelete - 1);
        }

        [Fact]
        public void EqualsVerifier()
        {
            TestUtil.EqualsVerifier(typeof(Course));
            var course1 = new Course {
                Id = 1L
            };
            var course2 = new Course {
                Id = course1.Id
            };
            course1.Should().Be(course2);
            course2.Id = 2L;
            course1.Should().NotBe(course2);
            course1.Id = 0;
            course1.Should().NotBe(course2);
        }
    }
}

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
    public class SchoolResourceIntTest {
        public SchoolResourceIntTest()
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

        private School _school;

        private School CreateEntity()
        {
            return new School {
                Name = DefaultName,
                Age = DefaultAge
            };
        }

        private void InitTest()
        {
            _school = CreateEntity();
        }

        [Fact]
        public async Task CreateSchool()
        {
            var databaseSizeBeforeCreate = _applicationDatabaseContext.Schools.Count();

            // Create the School
            var response = await _client.PostAsync("/api/schools", TestUtil.ToJsonContent(_school));
            response.StatusCode.Should().Be(HttpStatusCode.Created);

            // Validate the School in the database
            var schoolList = _applicationDatabaseContext.Schools.ToList();
            schoolList.Count().Should().Be(databaseSizeBeforeCreate + 1);
            var testSchool = schoolList[schoolList.Count - 1];
            testSchool.Name.Should().Be(DefaultName);
            testSchool.Age.Should().Be(DefaultAge);
        }

        [Fact]
        public async Task CreateSchoolWithExistingId()
        {
            var databaseSizeBeforeCreate = _applicationDatabaseContext.Schools.Count();
            databaseSizeBeforeCreate.Should().Be(0);
            // Create the School with an existing ID
            _school.Id = 1L;

            // An entity with an existing ID cannot be created, so this API call must fail
            var response = await _client.PostAsync("/api/schools", TestUtil.ToJsonContent(_school));
            response.StatusCode.Should().Be(HttpStatusCode.BadRequest);

            // Validate the School in the database
            var schoolList = _applicationDatabaseContext.Schools.ToList();
            schoolList.Count().Should().Be(databaseSizeBeforeCreate);
        }

        [Fact]
        public async Task GetAllSchools()
        {
            // Initialize the database
            _applicationDatabaseContext.Schools.Add(_school);
            await _applicationDatabaseContext.SaveChangesAsync();

            // Get all the schoolList
            var response = await _client.GetAsync("/api/schools?sort=id,desc");
            response.StatusCode.Should().Be(HttpStatusCode.OK);

            var json = JToken.Parse(await response.Content.ReadAsStringAsync());
            json.SelectTokens("$.[*].id").Should().Contain(_school.Id);
            json.SelectTokens("$.[*].name").Should().Contain(DefaultName);
            json.SelectTokens("$.[*].age").Should().Contain(DefaultAge);
        }

        [Fact]
        public async Task GetSchool()
        {
            // Initialize the database
            _applicationDatabaseContext.Schools.Add(_school);
            await _applicationDatabaseContext.SaveChangesAsync();

            // Get the school
            var response = await _client.GetAsync($"/api/schools/{_school.Id}");
            response.StatusCode.Should().Be(HttpStatusCode.OK);

            var json = JToken.Parse(await response.Content.ReadAsStringAsync());
            json.SelectTokens("$.id").Should().Contain(_school.Id);
            json.SelectTokens("$.name").Should().Contain(DefaultName);
            json.SelectTokens("$.age").Should().Contain(DefaultAge);
        }

        [Fact]
        public async Task GetNonExistingSchool()
        {
            var response = await _client.GetAsync("/api/schools/" + long.MaxValue);
            response.StatusCode.Should().Be(HttpStatusCode.NotFound);
        }

        [Fact]
        public async Task UpdateSchool()
        {
            // Initialize the database
            _applicationDatabaseContext.Schools.Add(_school);
            await _applicationDatabaseContext.SaveChangesAsync();

            var databaseSizeBeforeUpdate = _applicationDatabaseContext.Schools.Count();

            // Update the school
            var updatedSchool =
                await _applicationDatabaseContext.Schools.SingleOrDefaultAsync(it => it.Id == _school.Id);
            // Disconnect from session so that the updates on updatedSchool are not directly saved in db
//TODO detach
            updatedSchool.Name = UpdatedName;
            updatedSchool.Age = UpdatedAge;

            var response = await _client.PutAsync("/api/schools", TestUtil.ToJsonContent(updatedSchool));
            response.StatusCode.Should().Be(HttpStatusCode.OK);

            // Validate the School in the database
            var schoolList = _applicationDatabaseContext.Schools.ToList();
            schoolList.Count().Should().Be(databaseSizeBeforeUpdate);
            var testSchool = schoolList[schoolList.Count - 1];
            testSchool.Name.Should().Be(UpdatedName);
            testSchool.Age.Should().Be(UpdatedAge);
        }

        [Fact]
        public async Task UpdateNonExistingSchool()
        {
            var databaseSizeBeforeUpdate = _applicationDatabaseContext.Schools.Count();

            // If the entity doesn't have an ID, it will throw BadRequestAlertException
            var response = await _client.PutAsync("/api/schools", TestUtil.ToJsonContent(_school));
            response.StatusCode.Should().Be(HttpStatusCode.BadRequest);

            // Validate the School in the database
            var schoolList = _applicationDatabaseContext.Schools.ToList();
            schoolList.Count().Should().Be(databaseSizeBeforeUpdate);
        }

        [Fact]
        public async Task DeleteSchool()
        {
            // Initialize the database
            _applicationDatabaseContext.Schools.Add(_school);
            await _applicationDatabaseContext.SaveChangesAsync();

            var databaseSizeBeforeDelete = _applicationDatabaseContext.Schools.Count();

            var response = await _client.DeleteAsync($"/api/schools/{_school.Id}");
            response.StatusCode.Should().Be(HttpStatusCode.OK);

            // Validate the database is empty
            var schoolList = _applicationDatabaseContext.Schools.ToList();
            schoolList.Count().Should().Be(databaseSizeBeforeDelete - 1);
        }

        [Fact]
        public void EqualsVerifier()
        {
            TestUtil.EqualsVerifier(typeof(School));
            var school1 = new School {
                Id = 1L
            };
            var school2 = new School {
                Id = school1.Id
            };
            school1.Should().Be(school2);
            school2.Id = 2L;
            school1.Should().NotBe(school2);
            school1.Id = 0;
            school1.Should().NotBe(school2);
        }
    }
}

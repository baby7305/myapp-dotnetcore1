using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyCompany.Models {
    [Table("course")]
    public class Course {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }

        public string Name { get; set; }

        public int? Age { get; set; }

        public IList<School> Schools { get; set; } = new List<School>();

        // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove

        public override bool Equals(object obj)
        {
            if (this == obj) return true;
            if (obj == null || GetType() != obj.GetType()) return false;
            var course = obj as Course;
            if (course?.Id == null || course?.Id == 0 || Id == 0) return false;
            return EqualityComparer<long>.Default.Equals(Id, course.Id);
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(Id);
        }

        public override string ToString()
        {
            return "Course{" +
                    $"ID='{Id}'" +
                    $", Name='{Name}'" +
                    $", Age='{Age}'" +
                    "}";
        }
    }
}

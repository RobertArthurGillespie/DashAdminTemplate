using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AdminDashTemplate.Server.Data.Models
{
    public partial class Category
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Url { get; set; } = null!;
        [Required]
        public bool? Deleted { get; set; }
        [Required]
        public bool? Visible { get; set; }
    }
}

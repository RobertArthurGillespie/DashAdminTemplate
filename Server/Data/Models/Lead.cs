using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AdminDashTemplate.Server.Data.Models
{
    public partial class Lead
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Phone { get; set; } = null!;
        public string Position { get; set; } = null!;
        public string Comments { get; set; } = null!;
        public string Sector { get; set; } = null!;
        public DateTime CreatedAt { get; set; }
        public string Status { get; set; } = null!;
    }
}

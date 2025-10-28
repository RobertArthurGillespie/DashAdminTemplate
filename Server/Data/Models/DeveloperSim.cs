using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AdminDashTemplate.Server.Data.Models
{
    public partial class DeveloperSim
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public string SimName { get; set; } = null!;
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AdminDashTemplate.Server.Data.Models
{
    public partial class DeveloperProfile
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public string DeveloperName { get; set; } = null!;
        public string DeveloperTitle { get; set; } = null!;
        public string DeveloperSimsId { get; set; } = null!;
        public string DeveloperProfileIcon { get; set; } = null!;
        public string DeveloperDescription { get; set; } = null!;
    }
}

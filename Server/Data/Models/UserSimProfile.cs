using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AdminDashTemplate.Server.Data.Models
{
    public partial class UserSimProfile
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; } = null!;
        public string Icon { get; set; } = null!;
    }
}

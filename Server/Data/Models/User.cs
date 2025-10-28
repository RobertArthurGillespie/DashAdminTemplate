using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AdminDashTemplate.Server.Data.Models
{
    public partial class User
    {
        [Key]
        public int Id { get; set; }
        public string Email { get; set; } = null!;
        public byte[] PasswordHash { get; set; } = null!;
        public byte[] PasswordSalt { get; set; } = null!;
        public DateTime DateCreated { get; set; }
        public string Role { get; set; } = null!;
        public int Reputation { get; set; }
    }
}

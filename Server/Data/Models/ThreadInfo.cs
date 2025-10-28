using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AdminDashTemplate.Server.Data.Models
{
    [Table("ThreadInfo")]
    public partial class ThreadInfo
    {
        [Key]
        public int Id { get; set; }
        public string ThreadTitle { get; set; } = null!;
        public string ThreadId { get; set; } = null!;
        public string ThreadOwner { get; set; } = null!;
        public string ThreadOwnerToken { get; set; } = null!;
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AdminDashTemplate.Server.Data.Models
{
    public partial class ActiveChat
    {
        [Key]
        public int Id { get; set; }
        public string ThreadTitle { get; set; } = null!;
        public int ThreadId { get; set; }
    }
}

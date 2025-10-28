using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AdminDashTemplate.Server.Data.Models
{
    [Table("ChatUserInfo")]
    public partial class ChatUserInfo
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        [Column("IDToken")]
        public string Idtoken { get; set; } = null!;
        public string UserId { get; set; } = null!;
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AdminDashTemplate.Server.Data.Models
{
    public partial class UserSimStat
    {
        [Key]
        public int UserId { get; set; }
        [Key]
        public int ProductId { get; set; }
        public bool HasCompleted { get; set; }
        public int Score { get; set; }
        public int SimTotalScore { get; set; }
        public int SimProgressValue { get; set; }
    }
}

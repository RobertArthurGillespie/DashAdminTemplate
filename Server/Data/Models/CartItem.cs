using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AdminDashTemplate.Server.Data.Models
{
    public partial class CartItem
    {
        [Key]
        public int UserId { get; set; }
        [Key]
        public int ProductId { get; set; }
        [Key]
        public int ProductTypeId { get; set; }
        public int Quantity { get; set; }
    }
}

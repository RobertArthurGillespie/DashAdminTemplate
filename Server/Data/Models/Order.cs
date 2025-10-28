using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AdminDashTemplate.Server.Data.Models
{
    public partial class Order
    {
        public Order()
        {
            OrderItems = new HashSet<OrderItem>();
        }

        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public DateTime OrderDate { get; set; }
        [Column(TypeName = "decimal(18, 2)")]
        public decimal TotalPrice { get; set; }

        [InverseProperty("Order")]
        public virtual ICollection<OrderItem> OrderItems { get; set; }
    }
}

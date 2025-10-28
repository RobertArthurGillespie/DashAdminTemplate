using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AdminDashTemplate.Server.Data.Models
{
    [Index("ProductId", Name = "IX_OrderItems_ProductId")]
    [Index("ProductTypeId", Name = "IX_OrderItems_ProductTypeId")]
    public partial class OrderItem
    {
        [Key]
        public int OrderId { get; set; }
        [Key]
        public int ProductId { get; set; }
        [Key]
        public int ProductTypeId { get; set; }
        public int Quantity { get; set; }
        [Column(TypeName = "decimal(18, 2)")]
        public decimal OrderPrice { get; set; }

        [ForeignKey("OrderId")]
        [InverseProperty("OrderItems")]
        public virtual Order Order { get; set; } = null!;
        [ForeignKey("ProductId")]
        [InverseProperty("OrderItems")]
        public virtual Product Product { get; set; } = null!;
        [ForeignKey("ProductTypeId")]
        [InverseProperty("OrderItems")]
        public virtual ProductType ProductType { get; set; } = null!;
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AdminDashTemplate.Server.Data.Models
{
    public partial class ProductType
    {
        public ProductType()
        {
            OrderItems = new HashSet<OrderItem>();
            ProductVariants = new HashSet<ProductVariant>();
        }

        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = null!;

        [InverseProperty("ProductType")]
        public virtual ICollection<OrderItem> OrderItems { get; set; }
        [InverseProperty("ProductType")]
        public virtual ICollection<ProductVariant> ProductVariants { get; set; }
    }
}

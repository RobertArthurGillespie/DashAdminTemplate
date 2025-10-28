using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AdminDashTemplate.Server.Data.Models
{
    public partial class Product
    {
        public Product()
        {
            OrderItems = new HashSet<OrderItem>();
            ProductVariants = new HashSet<ProductVariant>();
        }

        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Description { get; set; } = null!;
        public string Category { get; set; } = null!;
        public int CategoryId { get; set; }
        public string Image { get; set; } = null!;
        public bool Featured { get; set; }
        public string AssetPath { get; set; } = null!;
        [Required]
        public bool? Deleted { get; set; }
        [Required]
        public bool? Visible { get; set; }

        [InverseProperty("Product")]
        public virtual ICollection<OrderItem> OrderItems { get; set; }
        [InverseProperty("Product")]
        public virtual ICollection<ProductVariant> ProductVariants { get; set; }
    }
}

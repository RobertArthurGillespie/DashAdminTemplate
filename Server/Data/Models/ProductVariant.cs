using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AdminDashTemplate.Server.Data.Models
{
    [Index("ProductTypeId", Name = "IX_ProductVariants_ProductTypeId")]
    public partial class ProductVariant
    {
        [Key]
        public int ProductId { get; set; }
        [Key]
        public int ProductTypeId { get; set; }
        [Column(TypeName = "decimal(18, 2)")]
        public decimal Price { get; set; }
        [Column(TypeName = "decimal(18, 2)")]
        public decimal OriginalPrice { get; set; }
        [Required]
        public bool? Deleted { get; set; }
        [Required]
        public bool? Visible { get; set; }

        [ForeignKey("ProductId")]
        [InverseProperty("ProductVariants")]
        public virtual Product Product { get; set; } = null!;
        [ForeignKey("ProductTypeId")]
        [InverseProperty("ProductVariants")]
        public virtual ProductType ProductType { get; set; } = null!;
    }
}

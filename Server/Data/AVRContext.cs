using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using AdminDashTemplate.Server.Data.Models;

namespace AdminDashTemplate.Server.Data
{
    public partial class AVRContext : DbContext
    {
        public AVRContext()
        {
        }

        public AVRContext(DbContextOptions<AVRContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ActiveChat> ActiveChats { get; set; } = null!;
        public virtual DbSet<CartItem> CartItems { get; set; } = null!;
        public virtual DbSet<Category> Categories { get; set; } = null!;
        public virtual DbSet<ChatUserInfo> ChatUserInfos { get; set; } = null!;
        public virtual DbSet<DeveloperProfile> DeveloperProfiles { get; set; } = null!;
        public virtual DbSet<DeveloperSim> DeveloperSims { get; set; } = null!;
        public virtual DbSet<Lead> Leads { get; set; } = null!;
        public virtual DbSet<NonBrowserSim> NonBrowserSims { get; set; } = null!;
        public virtual DbSet<Order> Orders { get; set; } = null!;
        public virtual DbSet<OrderItem> OrderItems { get; set; } = null!;
        public virtual DbSet<Product> Products { get; set; } = null!;
        public virtual DbSet<ProductType> ProductTypes { get; set; } = null!;
        public virtual DbSet<ProductVariant> ProductVariants { get; set; } = null!;
        public virtual DbSet<ThreadInfo> ThreadInfos { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;
        public virtual DbSet<UserProfile> UserProfiles { get; set; } = null!;
        public virtual DbSet<UserSimProfile> UserSimProfiles { get; set; } = null!;
        public virtual DbSet<UserSimStat> UserSimStats { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=tcp:avrservice.database.windows.net,1433;Initial Catalog=BlazorStore;Persist Security Info=False;User ID=rob;Password=Rocket000!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CartItem>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.ProductId, e.ProductTypeId });
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.Property(e => e.Deleted).HasDefaultValueSql("(CONVERT([bit],(0)))");

                entity.Property(e => e.Visible).HasDefaultValueSql("(CONVERT([bit],(0)))");
            });

            modelBuilder.Entity<ChatUserInfo>(entity =>
            {
                entity.Property(e => e.UserId).HasDefaultValueSql("(N'')");
            });

            modelBuilder.Entity<DeveloperProfile>(entity =>
            {
                entity.Property(e => e.DeveloperDescription).HasDefaultValueSql("(N'')");

                entity.Property(e => e.DeveloperProfileIcon).HasDefaultValueSql("(N'')");
            });

            modelBuilder.Entity<OrderItem>(entity =>
            {
                entity.HasKey(e => new { e.OrderId, e.ProductId, e.ProductTypeId });
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.Property(e => e.Deleted).HasDefaultValueSql("(CONVERT([bit],(0)))");

                entity.Property(e => e.Visible).HasDefaultValueSql("(CONVERT([bit],(0)))");
            });

            modelBuilder.Entity<ProductVariant>(entity =>
            {
                entity.HasKey(e => new { e.ProductId, e.ProductTypeId });

                entity.Property(e => e.Deleted).HasDefaultValueSql("(CONVERT([bit],(0)))");

                entity.Property(e => e.Visible).HasDefaultValueSql("(CONVERT([bit],(0)))");
            });

            modelBuilder.Entity<ThreadInfo>(entity =>
            {
                entity.Property(e => e.ThreadOwner).HasDefaultValueSql("(N'')");

                entity.Property(e => e.ThreadOwnerToken).HasDefaultValueSql("(N'')");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.Role).HasDefaultValueSql("(N'')");
            });

            modelBuilder.Entity<UserProfile>(entity =>
            {
                entity.Property(e => e.ProfileId).ValueGeneratedNever();
            });

            modelBuilder.Entity<UserSimStat>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.ProductId });
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace AdminDashTemplate.Server.Data.Models
{
    public partial class UserProfile
    {
        [Key]
        public Guid ProfileId { get; set; }
        public Guid UserId { get; set; }
        public Guid CompanyId { get; set; }
        public Guid? DepartmentId { get; set; }
        [StringLength(50)]
        public string FirstName { get; set; } = null!;
        [StringLength(50)]
        public string LastName { get; set; } = null!;
        [StringLength(100)]
        public string Email { get; set; } = null!;
        [StringLength(255)]
        public string ProfileImageUrl { get; set; } = null!;
        [StringLength(100)]
        public string JobTitle { get; set; } = null!;
        [StringLength(50)]
        public string DriverLicenseType { get; set; } = null!;
        public int? DriverExperienceYears { get; set; }
        public DateTime EnrollmentDate { get; set; }
        public DateTime? LastActivityDate { get; set; }
        [Column(TypeName = "decimal(5, 2)")]
        public decimal CurriculumCompletionPercentage { get; set; }
        [StringLength(20)]
        public string CertificationStatus { get; set; } = null!;
        public DateTime? CertificationDate { get; set; }
        public DateTime? CertificationExpiryDate { get; set; }
        [Column(TypeName = "decimal(5, 2)")]
        public decimal DetectionModuleCompletionPercentage { get; set; }
        [Column(TypeName = "decimal(5, 2)")]
        public decimal? PreTripInspectionScore { get; set; }
        [Column(TypeName = "decimal(5, 2)")]
        public decimal? HazardDetectionAccuracy { get; set; }
        [Column(TypeName = "decimal(5, 2)")]
        public decimal? DistractionRecognitionScore { get; set; }
        [Column(TypeName = "decimal(5, 2)")]
        public decimal DefensiveModuleCompletionPercentage { get; set; }
        [Column(TypeName = "decimal(5, 2)")]
        public decimal? FollowingDistanceCompliance { get; set; }
        [Column(TypeName = "decimal(5, 2)")]
        public decimal? IntersectionSafetyScore { get; set; }
        [Column(TypeName = "decimal(5, 2)")]
        public decimal? SpeedManagementScore { get; set; }
        [Column(TypeName = "decimal(5, 2)")]
        public decimal? EmergencyResponseScore { get; set; }
        [Column(TypeName = "decimal(5, 2)")]
        public decimal DedicationModuleCompletionPercentage { get; set; }
        [Column(TypeName = "decimal(5, 2)")]
        public decimal? SafetyCommitmentScore { get; set; }
        [Column(TypeName = "decimal(5, 2)")]
        public decimal? PeerCollaborationScore { get; set; }
        public int ContinuingEducationHours { get; set; }
        [Column(TypeName = "decimal(5, 2)")]
        public decimal? OverallRiskScore { get; set; }
        [StringLength(20)]
        public string RiskCategory { get; set; } = null!;
        public int PreviousIncidentCount { get; set; }
        public int PostTrainingIncidentCount { get; set; }
        [Column(TypeName = "decimal(8, 2)")]
        public decimal TotalSimulationHours { get; set; }
        public int LoginFrequencyPerMonth { get; set; }
        public int VoluntaryContentAccessCount { get; set; }
        public bool IsActive { get; set; }
        [StringLength(20)]
        public string AccountStatus { get; set; } = null!;
        public string Notes { get; set; } = null!;
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}

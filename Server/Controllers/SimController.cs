using AdminDashTemplate.Server.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AdminDashTemplate.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    
    public class SimController : ControllerBase
    {
        private readonly AVRContext _context;

        public SimController(AVRContext context)
        {
            _context = context;
        }

        [HttpGet("test")]
        public IActionResult test()
        {
            return Content("Test successful");
        }

        [HttpGet("TotalReputation")] // Matches the endpoint used in Analytics.razor
        public async Task<ActionResult<int>> GetTotalReputation()
        {
            try
            {
                // Access the database and calculate the sum
                // The SumAsync is the most efficient way to do this in EF Core
                var totalReputation = await _context.Users.SumAsync(u => u.Reputation);
                return totalReputation;
            }
            catch (Exception ex)
            {
                // Log and return a server error
                Console.WriteLine($"Database Error: {ex.Message}");
                return StatusCode(500, "Error calculating total reputation.");
            }
        }

        // --- NEW ENDPOINT FOR CONTINUING EDUCATION HOURS ---
        [HttpGet("TotalContinuingEducation")]
        public async Task<ActionResult<int>> GetTotalContinuingEducation()
        {
            try
            {
                // Access the UserProfiles table and sum the ContinuingEducationHours column
                var totalHours = await _context.UserProfiles.SumAsync(p => p.ContinuingEducationHours);
                // Note: We return the total hours directly as the integer sum
                return totalHours;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Database Error: {ex.Message}");
                return StatusCode(500, "Error calculating total continuing education hours.");
            }
        }
    }
}

using Microsoft.AspNetCore.Mvc;

namespace AdminDashTemplate.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    
    public class SimController : ControllerBase
    {
        

        [HttpGet("test")]
        public IActionResult test()
        {
            return Content("Test successful");
        }
    }
}

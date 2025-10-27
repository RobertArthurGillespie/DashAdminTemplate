using Microsoft.AspNetCore.Mvc;

namespace AdminDashTemplate.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SimController : ControllerBase
    {
        

        [HttpGet("Test")]
        public IActionResult Test()
        {
            return Content("Test successful");
        }
    }
}

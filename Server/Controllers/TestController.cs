using Microsoft.AspNetCore.Mvc;


namespace AdminDashTemplate.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {
        [HttpGet("test")]
        public IActionResult test()
        {
            return Content("Test successful");
        }

        [HttpGet("testagain")]
        public IActionResult testagain()
        {
            return Content("Test 2 successful!");
        }
    }
}

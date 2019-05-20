using Microsoft.AspNetCore.Mvc;

namespace MInReact.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using MInReact.CarDb;

namespace MInReact.Controllers
{ 
 public class JSONController : Controller
{
    CarDbContext _database;

    public JSONController(CarDbContext DataBase)
    {
        _database = DataBase;
    }

    public IActionResult Index()
    {
        return View();
    }

    [HttpGet]
    public IActionResult GetCars()
    {
        var cars = _database.Cars
            .ToList();

        return Json(cars);
    }
}
}
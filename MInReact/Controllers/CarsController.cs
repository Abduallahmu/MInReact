using Microsoft.AspNetCore.Mvc;
using MInReact.Interfaces;
using MInReact.Models;

namespace MInReact.Controllers
{
    public class CarsController : Controller
    {
        private readonly ICar _car;

        public CarsController(ICar car)
        {
            _car = car;
        }

        public IActionResult Index()
        {
            return View(_car.AllCars());
        }

        public IActionResult AllCars()
        {
            return View(_car.AllCars());
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }
        

        public IActionResult Details(int? id)
        {
            if (id != null || id != 0)
            {
                var car = _car.FindCar(id);

                if (car != null)
                {
                    return View(car);
                }
                return NotFound();
            }
            return BadRequest();
        }

        [HttpGet]
        public IActionResult Edit(int? id)
        {
            if (id != null || id != 0)
            {
                var car = _car.FindCar(id);

                if (car != null)
                {
                    return View(car);
                }
                return NotFound();
            }
            return BadRequest();
        }
        [HttpPost]
        public IActionResult Edit(Car car)
        {
            if (ModelState.IsValid)
            {
                var newCar = _car.EditCar(car);

                if (newCar != null)
                {
                    return RedirectToAction(nameof(Details), "Cars", new { id = newCar.Id });
                }
                return NotFound();
            }
            return BadRequest();
        }

        [HttpGet]
        public IActionResult Delete(int? id)
        {
            if (id != null || id != 0)
            {
                var car = _car.FindCar(id);

                if (car != null)
                {
                    return View(car);
                }
                return NotFound();
            }
            return BadRequest();
        }
        [HttpPost, ActionName("Delete")]
        public IActionResult DeleteConfirmed(int? id)
        {
            if (id != null || id != 0)
            {
                var x = _car.DeleteCar(id);

                if (x)
                {
                    return RedirectToAction(nameof(Index));
                }
                return NotFound();
            }
            return BadRequest();
        }
    }
}
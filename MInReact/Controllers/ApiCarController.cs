using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using MInReact.CarDb;
using MInReact.Interfaces;
using MInReact.Models;

namespace MInReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class ApiCarController : ControllerBase
    {
        private readonly ICar _car;
        private readonly CarDbContext _database;

        public ApiCarController(ICar car, CarDbContext Db)
        {
            _car = car;
            _database = Db;
        }

        [HttpGet]
        public List<Car> Get()
        {
            var cars = _database.Cars.ToList();

            return new List<Car>(cars);
        }

        [HttpGet("{Car}")]
        public IEnumerable<string> GetBrands()
        {
            var brands = new List<string>();

            foreach (var item in _database.Markes)
            {
                brands.Add(item.Name);
            }

            if (brands != null)
            {
                return brands;
            }
            return null;
        }

        [HttpPost]
        public List<Car> Post(Car car)
        {
            if (ModelState.IsValid)
            {
                var boolean = _car.CreateCar(car);

                if (boolean)
                {
                    return _database.Cars.ToList();
                }
            }
            return null;
        }

        [HttpPut("{id}")]
        public Car Put(int? id, Car car)
        {
            if (ModelState.IsValid)
            {
                if (id != null || id != 0)
                {
                    car.Id = (int)id;

                    var newCar = _car.EditCar(car);

                    if (newCar != null)
                    {
                        return newCar;
                    }
                }
            }
            return null;
        }

        [HttpDelete("{id}")]
        public void Delete(int? id)
        {
            if (id != null || id != 0)
            {
                var car = _database.Cars.SingleOrDefault(x => x.Id == id);

                _database.Cars.Remove(car);
                _database.SaveChanges();

                _car.DeleteCar(id);
            }
        }
    }
}
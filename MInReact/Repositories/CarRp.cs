using MInReact.CarDb;
using MInReact.Interfaces;
using MInReact.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MInReact.Repositories
{
    public class CarRp : ICar
    {
        private readonly CarDbContext _database;

        private readonly int Year = DateTime.Now.Year + 1;

        public CarRp(CarDbContext Database)
        {
            _database = Database;
        }

        public List<Car> AllCars()
        {
            var cars = _database.Cars
                .ToList();

            return cars;
        }

        public bool CreateCar(Car car)
        {
            if (!string.IsNullOrWhiteSpace(car.ModelName) ||
                !string.IsNullOrWhiteSpace(car.Marke) ||
                !string.IsNullOrWhiteSpace(car.Color) ||
                car.ProductionYear > 2000 || car.ProductionYear <= Year)
            {
                var newCar = new Car()
                {
                    ModelName = car.ModelName,
                    Marke = car.Marke,
                    Color = car.Color,
                    ProductionYear = car.ProductionYear
                };

                if (newCar != null)
                {
                    _database.Cars.Add(newCar);

                    _database.SaveChanges();

                    return true;
                }
            }
            return false;
        }

        public bool DeleteCar(int? id)
        {
            if (id != null || id != 0)
            {
                var car = _database.Cars.SingleOrDefault(wd => wd.Id == id);

                if (car != null)
                {
                    _database.Cars.Remove(car);

                    _database.SaveChanges();

                    return true;
                }
            }
            return false;
        }

        public Car EditCar(Car car)
        {
            if (!string.IsNullOrWhiteSpace(car.ModelName) ||
                !string.IsNullOrWhiteSpace(car.Marke) ||
                !string.IsNullOrWhiteSpace(car.Color) ||
                car.ProductionYear > 1900 || car.ProductionYear <= Year)
            {
                var original = _database.Cars.SingleOrDefault(x => x.Id == car.Id);

                if (original != null)
                {
                    original.ModelName = car.ModelName;
                    original.Marke = car.Marke;
                    original.Color = car.Color;
                    original.ProductionYear = car.ProductionYear;

                    _database.SaveChanges();

                    return original;
                }
            }
            return null;
        }

        public Car FindCar(int? id)
        {
            if (id != null || id != 0)
            {
                Car car = _database.Cars.SingleOrDefault(wb => wb.Id == id);

                if (car != null)
                {
                    return car;
                }
            }
            return null;
        }

        public Car SortCarBy(string SBy)
        {
            if (string.IsNullOrWhiteSpace(SBy))
            {
                // change
                if (SBy.Contains("ModelName"))
                {
                    var SortCars = _database.Cars.ToList();
                }
            }
            return null;
        }
    }
}
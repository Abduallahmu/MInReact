using MInReact.Models;
using System.Collections.Generic;

namespace MInReact.Interfaces
{
    public interface ICar
    {
        bool CreateCar(Car car);
        Car FindCar(int? id);
        List<Car> AllCars();
        Car EditCar(Car car);
        Car SortCarBy(string sortBy);
        bool DeleteCar(int? id);
    }
}

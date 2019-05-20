using MInReact.Models;
using System.Collections.Generic;

namespace MInReact.ViewModels
{
    public class CarsVM
    {
        public Car Car { get; set; }

        public string SortBy { get; set; }

        public List<Car> Cars { get; set; }
    }
}

using MInReact.CarDb;
using MInReact.Models;
using System.Linq;

namespace MInReact
{
    public class CarDbInitializer
    {
        internal static void Initialize(CarDbContext context)
        {
            context.Database.EnsureCreated();

            if (!context.Markes.Any())
            {
                var Markes = new Marke[]
                {
                    new Marke{Name="Tesla"},
                    new Marke{Name="BMW"},
                    new Marke{Name="Ferrari"},
                    new Marke{Name="Mini"},
                    new Marke{Name="Jaguar"},
                    new Marke{Name="Land Rover"},
                    new Marke{Name="Mercedes-Benz"},
                    new Marke{Name="Porsche"},
                    new Marke{Name="Hyundai"},
                    new Marke{Name="Volkswagen"},
                    new Marke{Name="Ford"},
                    new Marke{Name="Toyota"},

                };

                context.Markes.AddRange(Markes);

                context.SaveChanges();

                if (!context.Cars.Any())
                {
                    var cars = new Car[]
                    {
                    new Car{ModelName="MINI Cooper 5 DOOR", Marke=Markes[6].Name, Color="blue", ProductionYear=2013},
                    new Car{ModelName="Ferrari Pininfarina Sergio Concept", Marke=Markes[6].Name, Color="green", ProductionYear=2013},
                    new Car{ModelName="BMW M5 E39", Marke=Markes[6].Name, Color="Black", ProductionYear=2018},
                    new Car{ModelName="Tesla S", Marke=Markes[0].Name, Color="white", ProductionYear=2019},
                    new Car{ModelName="Mercedes 300 SLR", Marke=Markes[10].Name, Color="golden", ProductionYear=2017},
                    new Car{ModelName="Porsche Cayman GT4", Marke=Markes[1].Name, Color="silver", ProductionYear=2016}
                    };

                    context.Cars.AddRange(cars);

                    context.SaveChanges();
                }
            }

        }
    }
}
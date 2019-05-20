using Microsoft.EntityFrameworkCore;
using MInReact.Models;

namespace MInReact.CarDb
{
    public class CarDbContext : DbContext
    {
        public CarDbContext(DbContextOptions<CarDbContext> options) : base(options) { }

        public DbSet<Car> Cars { get; set; }
        public DbSet<Marke> Markes { get; set; }
    }
}

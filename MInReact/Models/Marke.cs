using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MInReact.Models
{
    public class Marke
    {
        [Key]
        public int Id { get; set; }
   
        [Required]
        [Display(Name ="Marke")]
        public string Name { get; set; }
        public List<Car> Cars { get; set; } = new List<Car>();
    }
}

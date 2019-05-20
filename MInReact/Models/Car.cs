using System.ComponentModel.DataAnnotations;

namespace MInReact.Models
{
    public class Car
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Display(Name = "Model name")]
        [StringLength(10, MinimumLength = 1, ErrorMessage = "The model name must be between 1 to 10 characters long.")]
        public string ModelName { get; set; }

        [Required]
        [Display(Name = "Marke")]
        [StringLength(10, MinimumLength = 1, ErrorMessage = "The Marke name must be between 1 to 10 characters long.")]
        public string Marke { get; set; }

        [Required]
        [Display(Name = "Color")]
        [StringLength(10, MinimumLength = 1, ErrorMessage = "The name of the color must be between 1 to 10 characters long.")]
        public string Color { get; set; }

        [Required]
        [Display(Name = "Production year")]
        [Range(2000, 2020, ErrorMessage = "The production year must be between year 2000 and 2020 (Thanks you) ")]
        public int ProductionYear { get; set; }
    }
}

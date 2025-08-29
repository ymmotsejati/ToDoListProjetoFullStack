using System.ComponentModel.DataAnnotations;

namespace ToDoListProjeto.Api.Models
{
    public class TaskCreateModel
    {
        [Required]
        [MaxLength(200)]
        public string Title { get; set; }

        public string? Description { get; set; }

        [Required]
        public string Status { get; set; }

        [Required]
        public string Priority { get; set; }
    }
}
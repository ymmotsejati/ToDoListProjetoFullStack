using System;

namespace ToDoListProjeto.Api.Models
{
    public class TaskItem
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string? Description { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public DateTime? CompletedAt { get; set; }
        public string Status { get; set; } = "Pendente";
        public string Priority { get; set; } = "Média";
        public string UserId { get; set; }
        public User User { get; set; }
    }
}
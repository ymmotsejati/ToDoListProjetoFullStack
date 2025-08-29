using System.Collections.Generic;

namespace ToDoListProjeto.Api.Models
{
    public class User
    {
        public string Id { get; set; } // string para facilitar com o JWT User.Identity.Name
        public string Name { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public List<TaskItem> Tasks { get; set; }
    }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
private apiUrl = `${environment.apiUrl}/Tasks`;

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createTask(taskData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, taskData);
  }

  updateTaskStatus(taskId: number, newStatus: string): Observable<any> {
    const updatePayload = { status: newStatus };
    return this.http.put(`${this.apiUrl}/${taskId}`, updatePayload);
  }
  /**
   * ATUALIZA UMA TAREFA COMPLETA
   * @param taskId O ID da tarefa
   * @param taskData O objeto com os novos dados da tarefa
   */
  updateTask(taskId: number, taskData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${taskId}`, taskData);
  }
  /**
   * EXCLUI UMA TAREFA EXISTENTE
   * @param taskId O ID da tarefa a ser excluída
   */
  deleteTask(taskId: number): Observable<any> {
    // Envia uma requisição HTTP DELETE para o endpoint específico da tarefa
    return this.http.delete(`${this.apiUrl}/${taskId}`);
  }

  /**
   * Envia uma frase para o backend para ser processada pela IA.
   * @param prompt A frase digitada pelo usuário
   */
  createSmartTask(prompt: string): Observable<any> {
    const payload = { prompt: prompt };
    return this.http.post<any>(`${this.apiUrl}/smart-add`, payload);
  }
}
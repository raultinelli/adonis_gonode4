'use strict'

const Route = use('Route')

/**
 * Rotas de Usuários
 */

Route.post('users', 'UserController.store')

/**
 * Rotas de sssão de usuários
 */

Route.post('sessions', 'SessionController.store')

/**
 * Rotas de troca des senha
 */
Route.post('passwords', 'ForgotPasswordController.store')
Route.put('password', 'ForgotPasswordController.update')

/**
 * Rotas de Arquivos
 */
Route.get('files/:id', 'FileController.show')
Route.group(() => {
  Route.post('files', 'FileController.store')
  Route.resource('projects', 'ProjectController').apiOnly()
  Route.resource('projects.tasks', 'TaskController').apiOnly()
}).middleware(['auth'])

'use strict'

const Route = use('Route')

/**
 * Rotas de Usuários
 */

Route.post('users', 'UserController.store').validator('User')

/**
 * Rotas de sssão de usuários
 */

Route.post('sessions', 'SessionController.store').validator('Session')

/**
 * Rotas de troca des senha
 */
Route.post('passwords', 'ForgotPasswordController.store').validator(
  'ForgotPassword'
)
Route.put('password', 'ForgotPasswordController.update').validator(
  'ResetPassword'
)

/**
 * Rotas de Arquivos
 */
Route.get('files/:id', 'FileController.show')
Route.group(() => {
  Route.post('files', 'FileController.store')
  Route.resource('projects', 'ProjectController')
    .apiOnly()
    .validator(new Map([[['projects.store'], ['Project']]]))
  Route.resource('projects.tasks', 'TaskController')
    .apiOnly()
    .validator(new Map([[['projects.tasks.store'], ['Task']]]))
}).middleware(['auth'])

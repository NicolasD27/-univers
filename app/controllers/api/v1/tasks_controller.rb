class Api::V1::TasksController < ApplicationController
	before_action :find_project
	def index
		tasks = Task.where( project: @project)
		render json: tasks
	end

	def show
		task = Task.find(params[:id])
		render json: task
	end

	def create
		task = Task.new(name: params[:name], deadline: params[:deadline], priority: params[:priority])
	    task.project = @project
	    task.save!
	    render json: task
	end

	def update
		task = Task.find(params[:id])
		task.name =  params[:body][:name]
		task.priority =  params[:body][:priority]
		task.deadline =  params[:body][:deadline]
		task.done =  params[:body][:done]
		task.save
		render json: task
	end


	def destroy
		task = Task.find(params[:id])
		task.destroy
		render json: task
	end

	private

	def find_project
		@project = Project.find_by(name: params[:project_id])
	end
end
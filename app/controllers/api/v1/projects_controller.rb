class Api::V1::ProjectsController < ApplicationController
	def index
		projects = Project.where(user: current_user)
		render json: projects
	end

	def create
		project = Project.create(name: params[:name])
		project.user = current_user
		project.save
		render json: project
	end

	def destroy
		project = Project.find(params[:id])
		project.destroy
		render json: project
	end
end

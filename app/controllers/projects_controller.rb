class ProjectsController < ApplicationController
	def show
		if params[:id].blank?
	      redirect_to project_path(Project.first.name)
	    else
	      @project = Project.find_by(name: params[:id])
	      @projects = Project.all
	    end
	end
end

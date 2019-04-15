class Api::V1::CommentsController < ApplicationController
	before_action :find_task
	def index
		comments = Comment.where( task: @task)
		render json: comments
	end
	def show
		comment = Comment.find(params[:id])
		render json: comment
	end

	def create
		comment = Comment.new(content: params[:content])
	    comment.user = current_user
	    comment.task = @task
	    comment.save
	    render json: comment
	end

	def destroy
		comment = Comment.find(params[:id])

		comment.destroy
		render json: comment
	end

	private

	def find_task
		@task = Task.find(params[:task_id])
	end
end

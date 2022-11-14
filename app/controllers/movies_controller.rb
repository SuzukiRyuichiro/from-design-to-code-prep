class MoviesController < ApplicationController
  def index
    @movies = Movie.order(year: :desc, title: :asc)

    @movies = @movies.where("title ILIKE ?", "%#{params[:query]}%") if params[:query].present?

    # If you asked me for the page, I'll give you the whole view
    # If you just asked me for the list of movie list, I'll give you partials
    respond_to do |format|
      format.html # Follow regular flow of Rails
      format.text do
        render partial: 'movies/list', formats: [:html], locals: { movies: @movies }
      end
    end
  end

  def update
    # get the movie in stance with the id
    movie = Movie.find(params[:id])
    # update the instance with permitted params
    movie.update(movie_params)

    respond_to do |format|
      format.html { redirect_to movies_path }
      format.text { render partial: 'movie_infos', formats: [:html], locals: { movie: } }
    end
  end

  private

  def movie_params
    params.require(:movie).permit(%i[title year])
  end
end

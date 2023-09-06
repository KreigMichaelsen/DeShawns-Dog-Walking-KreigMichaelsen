using Deshawns.Models;

List <Dog> dogs = new List<Dog> 
{
    new Dog()
    {
        Id = 1,
        Name = "Spot",
        WalkerId = 0,
        CityId = 0
    },
     new Dog()
    {
        Id = 2,
        Name = "Shadow",
        WalkerId = 0,
        CityId = 0
    },
     new Dog()
    {
        Id = 3,
        Name = "Air Bud",
        WalkerId = 0,
        CityId = 0
    },
     new Dog()
    {
        Id = 4,
        Name = "Gatsby",
        WalkerId = 0,
        CityId = 0
    },
};

List <Walker> walkers = new List<Walker> 
{
    new Walker()
    {
        Id = 1,
        Name = "George",
    },
    new Walker()
    {
        Id = 2,
        Name = "Tom",
    },
    new Walker()
    {
        Id = 3,
        Name = "Sam",
    },
};

List <City> cities = new List<City> 
{
    new City()
    {
        Id = 1,
        Name = "New York",
    },
    new City()
    {
        Id = 2,
        Name = "Chicago",
    },
    new City()
    {
        Id = 3,
        Name = "Miami",
    },
    new City()
    {
        Id = 4,
        Name = "Los Angeles",
    },
};



var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors(options =>
                {
                    options.AllowAnyOrigin();
                    options.AllowAnyMethod();
                    options.AllowAnyHeader();
                });
}

app.UseHttpsRedirection();


app.MapGet("/api/hello", () =>
{
    return new { Message = "Welcome to DeShawn's Dog Walking" };
});

app.MapGet("/dogs", () =>
{
    return dogs;
});

app.MapGet("/dogs/{id}", (int id) =>
{
    Dog dog = dogs.FirstOrDefault(dog => dog.Id == id);
    if (dog == null)
    {
        return Results.NotFound();
    }
    return Results.Ok(dog);
});


app.Run();

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

List <WalkerCity> walkerCities = new List<WalkerCity> 
{
    new WalkerCity()
    {
        Id = 1,
        CityId = 1,
        WalkerId = 1,
    },
    new WalkerCity()
    {
        Id = 2,
        CityId = 2,
        WalkerId = 1,
    },
    new WalkerCity()
    {
        Id = 3,
        CityId = 1,
        WalkerId = 2,
    },
    new WalkerCity()    
    {
        Id = 4,
        CityId = 3,
        WalkerId = 3,
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

app.MapPost("/dogs", (Dog dog) =>
{
    // creates a new id (When we get to it later, our SQL database will do this for us like JSON Server did!)
    dog.Id = dogs.Count > 0 ?dogs.Max(st => st.Id) + 1 : 1;
    dogs.Add(dog);
    return dog;
});

app.MapGet("/walkers", () =>
{
    

    return walkers;

});

app.MapGet("/filteredWalkers/{cityId}", (int cityId) =>
{
    List<WalkerCity> filteredWalkerCities = walkerCities.Where(walkerCity => walkerCity.CityId == cityId).ToList();
    List<Walker> filteredWalkers = filteredWalkerCities.Select(filteredWalkerCity => walkers.First(walker => walker.Id == filteredWalkerCity.WalkerId)).ToList();

    return filteredWalkers;

});



app.MapGet("/walkers/{id}", (int id) =>
{
    Walker walker = walkers.FirstOrDefault(walker => walker.Id == id);
    List<WalkerCity> walkerCitiesForWalker = walkerCities.Where(walkerCity => walkerCity.WalkerId == id).ToList();
    List<City> citiesForWalker = walkerCitiesForWalker.Select(walkerCity => cities.FirstOrDefault(city => city.Id == walkerCity.CityId)).ToList();

    walker.Cities = citiesForWalker; 

    if (walker == null)
    {
        return Results.NotFound();
    }
    return Results.Ok(walker);
});

app.MapGet("/cities", () =>
{
    
    return cities;

});

app.MapGet("/cities/{id}", (int id) =>
{
        City city = cities.FirstOrDefault(city => city.Id == id);
        List<WalkerCity> walkerCitiesForCity = walkerCities.Where(walkerCity => walkerCity.CityId == id).ToList();
        List<Walker> walkersForCity = walkerCitiesForCity.Select(walkerCity => walkers.FirstOrDefault(walker => walker.Id == walkerCity.WalkerId)).ToList();
        city.Walkers = walkersForCity; 
    
if (city == null)
    {
        return Results.NotFound();
    }
    return Results.Ok(city);
   
});

app.MapPost("/cities", (City city) =>
{
    // creates a new id (When we get to it later, our SQL database will do this for us like JSON Server did!)
    city.Id = cities.Count > 0 ?cities.Max(st => st.Id) + 1 : 1;
    cities.Add(city);
    return city;
});


app.Run();

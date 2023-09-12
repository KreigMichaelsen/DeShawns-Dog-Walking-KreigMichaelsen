using Deshawns.Models;

List <Dog> dogs = new List<Dog> 
{
    new Dog()
    {
        Id = 1,
        Name = "Spot",
        WalkerId = 1,
        CityId = 1
    },
     new Dog()
    {
        Id = 2,
        Name = "Shadow",
        WalkerId = 3,
        CityId = 3
    },
     new Dog()
    {
        Id = 3,
        Name = "Air Bud",
        WalkerId = 2,
        CityId = 1
    },
     new Dog()
    {
        Id = 4,
        Name = "Gatsby",
        WalkerId = 1,
        CityId = 1
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
    dog.Walker = walkers.FirstOrDefault(walker => walker.Id == dog.WalkerId);
    dog.City = cities.FirstOrDefault(city => city.Id == dog.CityId);
   
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

app.MapDelete("/dogs/{id}", (int id) =>
{
    // creates a new id (When we get to it later, our SQL database will do this for us like JSON Server did!)
    Dog dog = dogs.FirstOrDefault(dog => dog.Id == id);
    dogs.Remove(dog);
});

app.MapGet("/walkerCities", () =>
{
   
    return walkerCities;

});

app.MapGet("/walkers", () =>
{
   
    return walkers;

});

app.MapGet("/filteredWalkers/{cityId}", (int cityId) =>
{
    List<WalkerCity> filteredWalkerCities = walkerCities.Where(walkerCity => walkerCity.CityId == cityId).ToList();
    List<Walker> filteredWalkers = filteredWalkerCities.Select(filteredWalkerCity => walkers.FirstOrDefault(walker => walker.Id == filteredWalkerCity.WalkerId)).ToList();


    return filteredWalkers;

});



app.MapGet("/walkers/{id}", (int id) =>
{
    Walker walker = walkers.FirstOrDefault(walker => walker.Id == id);
    List<Dog> dogsForWalkers = dogs.Where(dog => dog.WalkerId == walker.Id).ToList();
    List<WalkerCity> walkerCitiesForWalkers = walkerCities.Where(walkerCity => walkerCity.WalkerId == walker.Id).ToList();
    List<City> citiesForWalkers = walkerCitiesForWalkers.Select(walkerCity => cities.FirstOrDefault(city => city.Id == walkerCity.CityId)).ToList();
    

    if (walker == null)
    {
        return Results.NotFound();
    }
    walker.Cities = citiesForWalkers;
    walker.Dogs = dogsForWalkers;
    return Results.Ok(walker);
});

app.MapDelete("/walkers/{id}", (int id) =>
{
    // creates a new id (When we get to it later, our SQL database will do this for us like JSON Server did!)
    Walker walker = walkers.FirstOrDefault(walker => walker.Id == id);
    walkerCities =  walkerCities.Where(wc => wc.WalkerId != walker.Id).ToList();
    walkers.Remove(walker);
    
});

app.MapPut("/walkers/{id}/cityEdit", (int id, Walker walker) =>
{
    
    walkerCities =  walkerCities.Where(wc => wc.WalkerId != walker.Id).ToList();
    foreach (City city in walker.Cities)
    {
    WalkerCity newWC = new WalkerCity
    {
        WalkerId = walker.Id,
        CityId = city.Id
    };
    newWC.Id = walkerCities.Count > 0 ?walkerCities.Max(wc => wc.Id) + 1 : 1;
    walkerCities.Add(newWC);
    }


    
    List<Dog> foundDogs = dogs.Where(dogs => dogs.WalkerId == walker.Id).ToList();
    foreach(Dog dog in foundDogs) 
    {
        City matchingCity = walker.Cities.FirstOrDefault(city => city.Id == dog.CityId);
        if (matchingCity == null)
        {
            Dog nonMatchingDog = dogs.First(d => d.Id == dog.Id);
            nonMatchingDog.WalkerId = null;
        }
    }
 return Results.NoContent();
   
});

app.MapPut("/walkers/{id}/dogEdit", (int id, Walker walker) =>
{
    
 return Results.NoContent();
   
});


app.MapGet("/cities", () =>
{
   
    return cities;

});

app.MapGet("/cities/{id}", (int id) =>
{
        City city = cities.FirstOrDefault(city => city.Id == id);
        
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

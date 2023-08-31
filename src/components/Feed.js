import { Box, Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material'

export default function Feed () {
    return(
        <>
            <Box flex={2.5} p={2} >
            <Card sx={{ maxWidth: 800, marginBottom: '2em' }}>
                <CardMedia
                    sx={{ height: 10 }}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Waiter
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    UrbanBrew Collective
                    </Typography><br />
                    <Typography variant='caption'>If you're a people person with a flair for customer service, this role is perfect for you.</Typography>
                </CardContent>
                <CardActions style={{gap: '5px'}}>
                    <Button size="small" variant='outlined' >Learn More</Button>
                    <Button size="small" variant='contained'>Apply</Button>
                </CardActions>
            </Card>

            <Card sx={{ maxWidth: 800, marginBottom: '2em'}}>
                <CardMedia
                    sx={{ height: 10 }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Cook
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Restaurant Flavor Fusion
                    </Typography><br />
                    <Typography variant='caption'>We're searching for a skilled Cook to bring their passion for flavors to our kitchen. </Typography>
                </CardContent>
                <CardActions style={{gap: '5px'}}>
                    <Button size="small" variant='outlined' >Learn More</Button>
                    <Button size="small" variant='contained'>Apply</Button>
                </CardActions>
            </Card>

            <Card sx={{ maxWidth: 800, marginBottom: '2em' }}>
                <CardMedia
                    sx={{ height: 10 }}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Hotel Manager
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    OasisView Lodge
                    </Typography><br />
                    <Typography variant='caption'>As a Manager, you'll be the driving force behind our team's success.</Typography>
                </CardContent>
                <CardActions style={{gap: '5px'}}>
                    <Button size="small" variant='outlined' >Learn More</Button>
                    <Button size="small" variant='contained'>Apply</Button>
                </CardActions>
            </Card>

            <Card sx={{ maxWidth: 800, marginBottom: '2em' }}>
                <CardMedia
                    sx={{ height: 10 }}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Housekeeping
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Spa Hotel Tranquility
                    </Typography><br />
                    <Typography variant='caption'>Attention to detail is your middle name! Join us as a Housekeeping team member to maintain a sparkling and inviting environment for our guests.</Typography>
                </CardContent>
                <CardActions style={{gap: '5px'}}>
                    <Button size="small" variant='outlined' >Learn More</Button>
                    <Button size="small" variant='contained'>Apply</Button>
                </CardActions>
            </Card>

            <Card sx={{ maxWidth: 800, marginBottom: '2em' }}>
                <CardMedia
                    sx={{ height: 10 }}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Chef
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Restaurant Elegance Dine
                    </Typography><br />
                    <Typography variant='caption'>If you live and breathe the art of cooking, this is your stage. Join us in crafting an exceptional culinary experience for our guests.</Typography>
                </CardContent>
                <CardActions style={{gap: '5px'}}>
                    <Button size="small" variant='outlined' >Learn More</Button>
                    <Button size="small" variant='contained'>Apply</Button>
                </CardActions>
            </Card>

            </Box>
        </>
    )
}
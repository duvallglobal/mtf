import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"

export function UpcomingServices() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Services</CardTitle>
        <CardDescription>Your scheduled cleaning services</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="font-medium">Regular Maintenance</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Feb 25, 2024</span>
                  <Clock className="h-4 w-4" />
                  <span>2:00 PM</span>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Reschedule
              </Button>
            </div>
          </div>
          <div className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="font-medium">Window Cleaning</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Mar 10, 2024</span>
                  <Clock className="h-4 w-4" />
                  <span>10:00 AM</span>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Reschedule
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


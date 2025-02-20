import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MessageSquare, CreditCard, FileText } from "lucide-react"

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common tasks and actions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Button variant="outline" className="h-24 flex-col">
            <Calendar className="mb-2 h-5 w-5" />
            Schedule Service
          </Button>
          <Button variant="outline" className="h-24 flex-col">
            <MessageSquare className="mb-2 h-5 w-5" />
            Contact Support
          </Button>
          <Button variant="outline" className="h-24 flex-col">
            <CreditCard className="mb-2 h-5 w-5" />
            Make Payment
          </Button>
          <Button variant="outline" className="h-24 flex-col">
            <FileText className="mb-2 h-5 w-5" />
            View Documents
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

